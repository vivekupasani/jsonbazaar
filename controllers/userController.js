const users = [
  {
    id: "1",
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    username: "amitsharma",
    city: "Mumbai",
    state: "Maharashtra",
    picture:
      "https://imgs.search.brave.com/tKpkf8CsWo2aOinlqPvEbQtwFZGkUtj4AwapIAUX358/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFiaWFuLWhh/bmRzb21lLW1hbl8x/MzY4LTEzMjI4MS5q/cGc_c2VtdD1haXNf/aHlicmlk",
  },
  {
    id: "2",
    name: "Priya Verma",
    email: "priya.verma@example.com",
    username: "priyaverma",
    city: "Delhi",
    state: "Delhi",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "3",
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    username: "rahulsingh",
    city: "Bangalore",
    state: "Karnataka",
    picture:
      "https://imgs.search.brave.com/WEqG3oAEgmvQk_TjSFStNXrZv4rU1I7mbBRRGyGzKDM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL1Bob3RvZ3Jh/cGhpbmctbWVuLWxp/Z2h0ZW5lZC0yLmpw/Zz9yZXNpemU9NTY3/LDg1MCZzc2w9MQ",
  },
  {
    id: "4",
    name: "Sneha Patil",
    email: "sneha.patil@example.com",
    username: "snehapatil",
    city: "Pune",
    state: "Maharashtra",
    picture:
      "https://imgs.search.brave.com/YDq6IUEGMKogHkoCZ2jB8s3LuFeP8N0kAdiekw92r7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Uz/LzBlL2ZkZTMwZWQ0/MTRkODMwNTQ5MWI3/OWQyNzBiM2M4YTMx/LmpwZw",
  },
  {
    id: "5",
    name: "Vikram Rao",
    email: "vikram.rao@example.com",
    username: "vikramrao",
    city: "Hyderabad",
    state: "Telangana",
    picture:
      "https://imgs.search.brave.com/EKFPnoToZTJPq2Hz1GK-IP-J_0jRxZ2mmns30NEDM6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk1Lzc2Lzky/LzM2MF9GXzY5NTc2/OTI1OF9OTHBJc2g0/TmM5ekdDeTBoQ2pX/OUNRWDkzd3RnS3Np/dS5qcGc",
  },
  {
    id: "6",
    name: "Ananya Iyer",
    email: "ananya.iyer@example.com",
    username: "ananyaiyer",
    city: "Chennai",
    state: "Tamil Nadu",
    picture:
      "https://imgs.search.brave.com/Y6ZprzqdasBl86LYfzFIkwFNjPvIK2826kn_aWZvKr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4td29t/YW4tc2FyaV8xMDQ4/OTQ0LTE2ODI5NzU0/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
  },
  {
    id: "7",
    name: "Kunal Mehta",
    email: "kunal.mehta@example.com",
    username: "kunalmehta",
    city: "Ahmedabad",
    state: "Gujarat",
    picture:
      "https://imgs.search.brave.com/Bh1onMe84B1berLKB4Ec5pkEAlK4brz36S8SASWpbKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC15/b3VuZy1tYW4tc3Rh/bmRpbmctYWdhaW5z/dC1idWlsZGluZ3Mt/Y2l0eV8xMDQ4OTQ0/LTQ3OTMyNjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "8",
    name: "Ritika Das",
    email: "ritika.das@example.com",
    username: "ritikadas",
    city: "Kolkata",
    state: "West Bengal",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "9",
    name: "Sandeep Joshi",
    email: "sandeep.joshi@example.com",
    username: "sandeepjoshi",
    city: "Jaipur",
    state: "Rajasthan",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "10",
    name: "Pooja Reddy",
    email: "pooja.reddy@example.com",
    username: "poojareddy",
    city: "Bangalore",
    state: "Karnataka",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "11",
    name: "Arjun Nair",
    email: "arjun.nair@example.com",
    username: "arjunnair",
    city: "Kochi",
    state: "Kerala",
    picture:
      "https://imgs.search.brave.com/tKpkf8CsWo2aOinlqPvEbQtwFZGkUtj4AwapIAUX358/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFiaWFuLWhh/bmRzb21lLW1hbl8x/MzY4LTEzMjI4MS5q/cGc_c2VtdD1haXNf/aHlicmlk",
  },
  {
    id: "12",
    name: "Megha Kapoor",
    email: "megha.kapoor@example.com",
    username: "meghakapoor",
    city: "Chandigarh",
    state: "Punjab",
    picture:
      "https://imgs.search.brave.com/YDq6IUEGMKogHkoCZ2jB8s3LuFeP8N0kAdiekw92r7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Uz/LzBlL2ZkZTMwZWQ0/MTRkODMwNTQ5MWI3/OWQyNzBiM2M4YTMx/LmpwZw",
  },
  {
    id: "13",
    name: "Rohan Bansal",
    email: "rohan.bansal@example.com",
    username: "rohanbansal",
    city: "Indore",
    state: "Madhya Pradesh",
    picture:
      "https://imgs.search.brave.com/WEqG3oAEgmvQk_TjSFStNXrZv4rU1I7mbBRRGyGzKDM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL1Bob3RvZ3Jh/cGhpbmctbWVuLWxp/Z2h0ZW5lZC0yLmpw/Zz9yZXNpemU9NTY3/LDg1MCZzc2w9MQ",
  },
  {
    id: "14",
    name: "Divya Malhotra",
    email: "divya.malhotra@example.com",
    username: "divyamalhotra",
    city: "Lucknow",
    state: "Uttar Pradesh",
    picture:
      "https://imgs.search.brave.com/Y6ZprzqdasBl86LYfzFIkwFNjPvIK2826kn_aWZvKr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4td29t/YW4tc2FyaV8xMDQ4/OTQ0LTE2ODI5NzU0/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
  },
  {
    id: "15",
    name: "Manish Gupta",
    email: "manish.gupta@example.com",
    username: "manishgupta",
    city: "Patna",
    state: "Bihar",
    picture:
      "https://imgs.search.brave.com/EKFPnoToZTJPq2Hz1GK-IP-J_0jRxZ2mmns30NEDM6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk1Lzc2Lzky/LzM2MF9GXzY5NTc2/OTI1OF9OTHBJc2g0/TmM5ekdDeTBoQ2pX/OUNRWDkzd3RnS3Np/dS5qcGc",
  },
  {
    id: "16",
    name: "Neha Kulkarni",
    email: "neha.kulkarni@example.com",
    username: "nehakulkarni",
    city: "Nagpur",
    state: "Maharashtra",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74B1t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "17",
    name: "Aditya Chopra",
    email: "aditya.chopra@example.com",
    username: "adityachopra",
    city: "Gurgaon",
    state: "Haryana",
    picture:
      "https://imgs.search.brave.com/Bh1onMe84B1berLKB4Ec5pkEAlK4brz36S8SASWpbKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC15/b3VuZy1tYW4tc3Rh/bmRpbmctYWdhaW5z/dC1idWlsZGluZ3Mt/Y2l0eV8xMDQ4OTQ0/LTQ3OTMyNjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "18",
    name: "Shalini Tiwari",
    email: "shalini.tiwari@example.com",
    username: "shalinitiwari",
    city: "Kanpur",
    state: "Uttar Pradesh",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "19",
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    username: "ravikumar",
    city: "Bhopal",
    state: "Madhya Pradesh",
    picture:
      "https://imgs.search.brave.com/tKpkf8CsWo2aOinlqPvEbQtwFZGkUtj4AwapIAUX358/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFiaWFuLWhh/bmRzb21lLW1hbl8x/MzY4LTEzMjI4MS5q/cGc_c2VtdD1haXNf/aHlicmlk",
  },
  {
    id: "20",
    name: "Kavita Desai",
    email: "kavita.desai@example.com",
    username: "kavitadesai",
    city: "Surat",
    state: "Gujarat",
    picture:
      "https://imgs.search.brave.com/YDq6IUEGMKogHkoCZ2jB8s3LuFeP8N0kAdiekw92r7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Uz/LzBlL2ZkZTMwZWQ0/MTRkODMwNTQ5MWI3/OWQyNzBiM3M4YTMx/LmpwZw",
  },
  {
    id: "21",
    name: "Suresh Yadav",
    email: "suresh.yadav@example.com",
    username: "sureshyadav",
    city: "Varanasi",
    state: "Uttar Pradesh",
    picture:
      "https://imgs.search.brave.com/WEqG3oAEgmvQk_TjSFStNXrZv4rU1I7mbBRRGyGzKDM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL1Bob3RvZ3Jh/cGhpbmctbWVuLWxp/Z2h0ZW5lZC0yLmpw/Zz9yZXNpemU9NTY3/LDg1MCZzc2w9MQ",
  },
  {
    id: "22",
    name: "Lakshmi Menon",
    email: "lakshmi.menon@example.com",
    username: "lakshmimenon",
    city: "Thiruvananthapuram",
    state: "Kerala",
    picture:
      "https://imgs.search.brave.com/Y6ZprzqdasBl86LYfzFIkwFNjPvIK2826kn_aWZvKr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4td29t/YW4tc2FyaV8xMDQ4/OTQ0LTE2ODI5NzU0/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
  },
  {
    id: "23",
    name: "Nikhil Patel",
    email: "nikhil.patel@example.com",
    username: "nikhilpatel",
    city: "Vadodara",
    state: "Gujarat",
    picture:
      "https://imgs.search.brave.com/EKFPnoToZTJPq2Hz1GK-IP-J_0jRxZ2mmns30NEDM6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk1Lzc2Lzky/LzM2MF9GXzY5NTc2/OTI1OF9OTHBJc2g0/TmM5ekdDeTBoQ2pX/OUNRWDkzd3RnS3Np/dS5qcGc",
  },
  {
    id: "24",
    name: "Swati Agarwal",
    email: "swati.agarwal@example.com",
    username: "swatiagarwal",
    city: "Dehradun",
    state: "Uttarakhand",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "25",
    name: "Yash Thakur",
    email: "yash.thakur@example.com",
    username: "yashthakur",
    city: "Raipur",
    state: "Chhattisgarh",
    picture:
      "https://imgs.search.brave.com/Bh1onMe84B1berLKB4Ec5pkEAlK4brz36S8SASWpbKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC15/b3VuZy1tYW4tc3Rh/bmRpbmctYWdhaW5z/dC1idWlsZGluZ3Mt/Y2l0eV8xMDQ4OTQ0/LTQ3OTMyNjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "26",
    name: "Tara Bose",
    email: "tara.bose@example.com",
    username: "tarabose",
    city: "Guwahati",
    state: "Assam",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "27",
    name: "Sameer Khan",
    email: "sameer.khan@example.com",
    username: "sameerkhan",
    city: "Agra",
    state: "Uttar Pradesh",
    picture:
      "https://imgs.search.brave.com/tKpkf8CsWo2aOinlqPvEbQtwFZGkUtj4AwapIAUX358/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFiaWFuLWhh/bmRzb21lLW1hbl8x/MzY4LTEzMjI4MS5q/cGc_c2VtdD1haXNf/aHlicmlk",
  },
  {
    id: "28",
    name: "Anjali Nair",
    email: "anjali.nair@example.com",
    username: "anjalinair",
    city: "Coimbatore",
    state: "Tamil Nadu",
    picture:
      "https://imgs.search.brave.com/YDq6IUEGMKogHkoCZ2jB8s3LuFeP8N0kAdiekw92r7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Uz/LzBlL2ZkZTMwZWQ0/MTRkODMwNTQ5MWI3/OWQyNzBiM2M4YTMx/LmpwZw",
  },
  {
    id: "29",
    name: "Prakash Reddy",
    email: "prakash.reddy@example.com",
    username: "prakashreddy",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    picture:
      "https://imgs.search.brave.com/WEqG3oAEgmvQk_TjSFStNXrZv4rU1I7mbBRRGyGzKDM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL1Bob3RvZ3Jh/cGhpbmctbWVuLWxp/Z2h0ZW5lZC0yLmpw/Zz9yZXNpemU9NTY3/LDg1MCZzc2w9MQ",
  },
  {
    id: "30",
    name: "Riya Sengupta",
    email: "riya.sengupta@example.com",
    username: "riyasengupta",
    city: "Siliguri",
    state: "West Bengal",
    picture:
      "https://imgs.search.brave.com/Y6ZprzqdasBl86LYfzFIkwFNjPvIK2826kn_aWZvKr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4td29t/YW4tc2FyaV8xMDQ4/OTQ0LTE2ODI5NzU0/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
  },
  {
    id: "31",
    name: "Vivek Sharma",
    email: "vivek.sharma@example.com",
    username: "viveksharma",
    city: "Jodhpur",
    state: "Rajasthan",
    picture:
      "https://imgs.search.brave.com/EKFPnoToZTJPq2Hz1GK-IP-J_0jRxZ2mmns30NEDM6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk1Lzc2Lzky/LzM2MF9GXzY5NTc2/OTI1OF9OTHBJc2g0/TmM5ekdDeTBoQ2pX/OUNRWDkzd3RnS3Np/dS5qcGc",
  },
  {
    id: "32",
    name: "Shruti Pillai",
    email: "shruti.pillai@example.com",
    username: "shrutipillai",
    city: "Mangalore",
    state: "Karnataka",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "33",
    name: "Ajay Dubey",
    email: "ajay.dubey@example.com",
    username: "ajaydubey",
    city: "Gwalior",
    state: "Madhya Pradesh",
    picture:
      "https://imgs.search.brave.com/Bh1onMe84B1berLKB4Ec5pkEAlK4brz36S8SASWpbKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC15/b3VuZy1tYW4tc3Rh/bmRpbmctYWdhaW5z/dC1idWlsZGluZ3Mt/Y2l0eV8xMDQ4OTQ0/LTQ3OTMyNjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "34",
    name: "Preeti Rana",
    email: "preeti.rana@example.com",
    username: "preetirana",
    city: "Shimla",
    state: "Himachal Pradesh",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "35",
    name: "Siddharth Jain",
    email: "siddharth.jain@example.com",
    username: "siddharthjain",
    city: "Amritsar",
    state: "Punjab",
    picture:
      "https://imgs.search.brave.com/tKpkf8CsWo2aOinlqPvEbQtwFZGkUtj4AwapIAUX358/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFiaWFuLWhh/bmRzb21lLW1hbl8x/MzY4LTEzMjI4MS5q/cGc_c2VtdD1haXNf/aHlicmlk",
  },
  {
    id: "36",
    name: "Tanvi Shetty",
    email: "tanvi.shetty@example.com",
    username: "tanvishetty",
    city: "Mysore",
    state: "Karnataka",
    picture:
      "https://imgs.search.brave.com/YDq6IUEGMKogHkoCZ2jB8s3LuFeP8N0kAdiekw92r7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Uz/LzBlL2ZkZTMwZWQ0/MTRkODMwNTQ5MWI3/OWQyNzBiM2M4YTMx/LmpwZw",
  },
  {
    id: "37",
    name: "Harish Venkatesh",
    email: "harish.venkatesh@example.com",
    username: "harishvenkatesh",
    city: "Madurai",
    state: "Tamil Nadu",
    picture:
      "https://imgs.search.brave.com/WEqG3oAEgmvQk_TjSFStNXrZv4rU1I7mbBRRGyGzKDM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL1Bob3RvZ3Jh/cGhpbmctbWVuLWxp/Z2h0ZW5lZC0yLmpw/Zz9yZXNpemU9NTY3/LDg1MCZzc2w9MQ",
  },
  {
    id: "38",
    name: "Geeta Rawat",
    email: "geeta.rawat@example.com",
    username: "geetarawat",
    city: "Rishikesh",
    state: "Uttarakhand",
    picture:
      "https://imgs.search.brave.com/Y6ZprzqdasBl86LYfzFIkwFNjPvIK2826kn_aWZvKr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4td29t/YW4tc2FyaV8xMDQ4/OTQ0LTE2ODI5NzU0/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
  },
  {
    id: "39",
    name: "Karan Saxena",
    email: "karan.saxena@example.com",
    username: "karansaxena",
    city: "Udaipur",
    state: "Rajasthan",
    picture:
      "https://imgs.search.brave.com/EKFPnoToZTJPq2Hz1GK-IP-J_0jRxZ2mmns30NEDM6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk1Lzc2Lzky/LzM2MF9GXzY5NTc2/OTI1OF9OTHBJc2g0/TmM5ekdDeTBoQ2pX/OUNRWDkzd3RnS3Np/dS5qcGc",
  },
  {
    id: "40",
    name: "Jyoti Bhatt",
    email: "jyoti.bhatt@example.com",
    username: "jyotibhatt",
    city: "Rajkot",
    state: "Gujarat",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "41",
    name: "Mahesh Pandey",
    email: "mahesh.pandey@example.com",
    username: "maheshpandey",
    city: "Allahabad",
    state: "Uttar Pradesh",
    picture:
      "https://imgs.search.brave.com/Bh1onMe84B1berLKB4Ec5pkEAlK4brz36S8SASWpbKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC15/b3VuZy1tYW4tc3Rh/bmRpbmctYWdhaW5z/dC1idWlsZGluZ3Mt/Y2l0eV8xMDQ4OTQ0/LTQ3OTMyNjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "42",
    name: "Nisha Arora",
    email: "nisha.arora@example.com",
    username: "nishaarora",
    city: "Jalandhar",
    state: "Punjab",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "43",
    name: "Rakesh Mishra",
    email: "rakesh.mishra@example.com",
    username: "rakeshmishra",
    city: "Dhanbad",
    state: "Jharkhand",
    picture:
      "https://imgs.search.brave.com/tKpkf8CsWo2aOinlqPvEbQtwFZGkUtj4AwapIAUX358/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFiaWFuLWhh/bmRzb21lLW1hbl8x/MzY4LTEzMjI4MS5q/cGc_c2VtdD1haXNf/aHlicmlk",
  },
  {
    id: "44",
    name: "Suman Ghosh",
    email: "suman.ghosh@example.com",
    username: "sumanghosh",
    city: "Durgapur",
    state: "West Bengal",
    picture:
      "https://imgs.search.brave.com/YDq6IUEGMKogHkoCZ2jB8s3LuFeP8N0kAdiekw92r7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2Uz/LzBlL2ZkZTMwZWQ0/MTRkODMwNTQ5MWI3/OWQyNzBiM2M4YTMx/LmpwZw",
  },
  {
    id: "45",
    name: "Deepak Saini",
    email: "deepak.saini@example.com",
    username: "deepaksaini",
    city: "Faridabad",
    state: "Haryana",
    picture:
      "https://imgs.search.brave.com/WEqG3oAEgmvQk_TjSFStNXrZv4rU1I7mbBRRGyGzKDM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzAzL1Bob3RvZ3Jh/cGhpbmctbWVuLWxp/Z2h0ZW5lZC0yLmpw/Zz9yZXNpemU9NTY3/LDg1MCZzc2w9MQ",
  },
  {
    id: "46",
    name: "Pallavi Roy",
    email: "pallavi.roy@example.com",
    username: "pallaviroy",
    city: "Bhubaneswar",
    state: "Odisha",
    picture:
      "https://imgs.search.brave.com/Y6ZprzqdasBl86LYfzFIkwFNjPvIK2826kn_aWZvKr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbmRpYW4td29t/YW4tc2FyaV8xMDQ4/OTQ0LTE2ODI5NzU0/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
  },
  {
    id: "47",
    name: "Gaurav Tyagi",
    email: "gaurav.tyagi@example.com",
    username: "gauravtyagi",
    city: "Meerut",
    state: "Uttar Pradesh",
    picture:
      "https://imgs.search.brave.com/EKFPnoToZTJPq2Hz1GK-IP-J_0jRxZ2mmns30NEDM6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk1Lzc2Lzky/LzM2MF9GXzY5NTc2/OTI1OF9OTHBJc2g0/TmM5ekdDeTBoQ2pX/OUNRWDkzd3RnS3Np/dS5qcGc",
  },
  {
    id: "48",
    name: "Kirti Sharma",
    email: "kirti.sharma@example.com",
    username: "kirtisharma",
    city: "Nashik",
    state: "Maharashtra",
    picture:
      "https://imgs.search.brave.com/irt0pQC_eQLvOy8lQQZZkmTk74t3VTXpkwM2fFsAdGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzEyLzczLzg5/LzM2MF9GXzYxMjcz/ODkyN19MSWNGQ2lL/SFFoSHE5UjFRaGtW/Ukt2VDZSZWxZVW1n/di5qcGc",
  },
  {
    id: "49",
    name: "Santosh Iyer",
    email: "santosh.iyer@example.com",
    username: "santoshiyer",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    picture:
      "https://imgs.search.brave.com/Bh1onMe84B1berLKB4Ec5pkEAlK4brz36S8SASWpbKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC15/b3VuZy1tYW4tc3Rh/bmRpbmctYWdhaW5z/dC1idWlsZGluZ3Mt/Y2l0eV8xMDQ4OTQ0/LTQ3OTMyNjUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
  {
    id: "50",
    name: "Aarti Vyas",
    email: "aarti.vyas@example.com",
    username: "aartivyas",
    city: "Aurangabad",
    state: "Maharashtra",
    picture:
      "https://imgs.search.brave.com/Y1MxrOZ_XOA6x4uAN3SHlsMpllOvyPAYL31TFkw9UHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/d29tYW4td2Vhcmlu/Zy1zYXJpXzIzLTIx/NDk0MDA5MDYuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
  },
];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.createUser = (req, res) => {
  const { id, name, email, username, city, state , picture } = req.body;
  if (!id || !name || !email || !username || !city || !state || !picture) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const user = { id, name, email, username, city, state, picture };
  res.status(201).json({ message: "User created successfully", user });
};

exports.updateUser = (req, res) => {
  const { id, name, email, username, city, state, picture } = req.body;
  if (!id || !name || !email || !username || !city || !state || !picture) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const user = { id, name, email, username, city, state, picture };
  res.json({ message: "User updated successfully", user });
};

exports.deleteUser = (req, res) => {
  res.json({ message: "User deleted successfully" });
};
