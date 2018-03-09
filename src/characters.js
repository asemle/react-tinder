var data = [
    {
        id: 0,
        name: "Jerry",
        age: 35,
        gender: "Male",
        location: "3 miles",
        pictures: ["https://upload.wikimedia.org/wikipedia/en/f/f6/Jerry_Seinfeld.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLp6tWjhgc2rYei-dr98WP802eDOEYuKS4jScAg3l-18UXUbR"],
        job: "Stand-up Comedian",
        school: "",
        about: "There's more to life than making shallow, fairly obvious observations"

    },
    {
        id: 1,
        name: "George",
        age: 34,
        gender: "Male",
        location: "3 miles",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGzUkkzwPmnt7JK-5PRRNJxdxebUuTI1mVPjH1dPQ5jLRDNQk", "https://s3.amazonaws.com/bit-photos/large/5129538.jpeg", "https://img1.etsystatic.com/004/0/5851351/il_570xN.380160499_gd9j.jpg"],
        job: "Marine Biologist",
        school: "",
        about: "I love a good nap, sometimes its the only thing getting me out of bed in the morning"


    },
    {
        id: 2,
        name: "Elaine",
        age: 30,
        gender: "Female",
        location: "2 miles",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN2JjAHGqZVQWCi_6ciOZyEKQIyc2JOY72xomNkUpdsTBPJ3h", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/jld-story-647_092917020050.jpg", "http://cdn-wpmsa.defymedia.com/wp-content/uploads/sites/3/2014/05/elaine-benes-from-seinfeld.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_4o2OR6NSO4O48Tj1zyIf2WDCCDKjgpopSaQJBJdgap_lKdA"],
        job: "Writer for J. Peterman Catalog",
        school: "",
        about: "I once broke up with someone for not offering me pie"

    },
    {
        id: 3,
        name: "Kramer",
        age: 38,
        gender: "Male",
        location: "3 miles",
        pictures: ["https://upload.wikimedia.org/wikipedia/en/b/b7/Cosmo_Kramer.jpg", "https://cdn.costumewall.com/wp-content/uploads/2017/02/cosmo-kramer.jpg", "https://img0.etsystatic.com/008/0/5851351/il_340x270.370263870_r8lg.jpg", "https://vignette.wikia.nocookie.net/p__/images/0/00/Cosmo_Kramer_with_a_Cuban_Cigar.jpeg/revision/latest?cb=20160110104845&path-prefix=protagonist"],
        job: "Freelance",
        school: "",
        about: "Do I look like a hipster doofus?"

    },
    {
        id: 4,
        name: "Ross",
        age: 27,
        gender: "Male",
        location: "5 miles",
        pictures: ["https://vignette.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/20111216200027","https://vignette.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest/scale-to-width-down/350?cb=20100606065642", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDpxZwqSP5JIHV0QV2INwMrrrlIqXORADeBL9YH7LIQvliuQb"],
        job: "Professor of Paleontology",
        school: "",
        about: "Y-O-U-'-R-E mean 'you are', Y-O-U-R means your"

    },
    {
        id: 5,
        name: "Phoebe",
        age: 31,
        gender: "Female",
        location: "6 miles",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uSFkKvUgOofIJswRZd1j0d5gik4uXWKg_Web7K_2Bn5ZlWXP", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5D7KfvazQROYkVQMXgFsC2ILoWH-cbqiYhztjEldsy21wqOPg", "https://stylist-assets.imgix.net/app/uploads/2014/05/25003744/while-phoebe-s-waistcoast-worship-contributed-to-her-being-dubbed-the-kooky-one-1.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress", "http://www.comedycentral.co.uk/sites/default/files/styles/image-w-520-h-520-scale/public/cc_uk/galleries/large/2016/08/26/phoebe-buffay-man-repeller-25.jpg?itok=NliGmFcW"],
        job: "Massage Therapist",
        school: "",
        about: "If you want to receive emails about my upcoming shows, please give me money so I can buy a computer"

    }, {
        id: 6,
        name: "Chandler",
        age: 25,
        gender: "Male",
        location: "5 miles",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyN29L8fKgbgx0PPdM7X6A6tqWkc5iuz6b7RfHHMLGJVATMtTp", "https://qph.ec.quoracdn.net/main-qimg-b072efb98fc17a2391af6a8248c2950a-c", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5-Y5fYQ7mYqvYh2IXlKXuyZygpj6eOfmfvGx6rsgI9Mo0TaQ"],
        job: "IT Procurement Manager",
        school: "",
        about: "I’m not great at the advice, can I interest you in a sarcastic comment?"

    },
    {
        id: 7,
        name: "Rachel",
        age: 25,
        gender: "Female",
        location: "5 miles",
        pictures: ["https://typeset-beta.imgix.net/rehost/2016/9/13/2c4ae443-4af7-449c-ad9e-f4685bd94199.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5r3e8mX-iPnWo9c46tFq7eyUqwQ2qBUFV3YKKSwfPgJkdkD_", "https://vignette.wikia.nocookie.net/friends/images/3/38/RachelGreen.jpg/revision/latest?cb=20070424182924", "https://vignette.wikia.nocookie.net/friends/images/5/58/Rachel_Green.jpg/revision/latest?cb=20120624152620", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4q3eazdQol7cP65G8PiPxF1eoJKQJfnMiTmnIZAVOgdzudtlyew"],
        job: "Buyer and Personal Shopper at Bloomingdale's",
        school: "",
        about: "Girls tend not to like me."

    },
    {
        id: 8,
        name: "Joey",
        age: 27,
        gender: "Male",
        location: "5 miles",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7c7a4BBaU6Xz8SBBnAKPZJcsXxGMM0xSoodPvINfwlxOiHC4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLMElEA48iSxmYgynTbPLT2jwQgIpBcqPUxBaj0A4vd2FaZZB"],
        job: "Actor",
        school: "",
        about: "How you doin?"


    },
    {
        id: 9,
        name: "Monica",
        age: 30,
        gender: "Female",
        location: "5 miles",
        pictures: ["https://vignette.wikia.nocookie.net/friends/images/4/48/MonicaGeller.jpg/revision/latest?cb=20070424180524", "https://vignette.wikia.nocookie.net/friends/images/9/9e/Monica-geller-picture.jpg/revision/latest/scale-to-width-down/180?cb=20110723171212"],
        job: "Chef",
        school: "Culinary Institute of America",
        about: "Now, I need you to be careful and efficient.And remember: If I am harsh with you, it's only because you're doing it wrong."

    },
    {
        id: 10,
        name: "Newman",
        age: 37,
        gender: "Male",
        location: "4 miles",
        pictures: ["https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Newman_Seinfeld.jpg/220px-Newman_Seinfeld.jpg", "https://vignette.wikia.nocookie.net/seinfeld/images/3/34/Newman.JPG/revision/latest?cb=20061215040413"],
        job: "Mailman",
        school: "",
        about: "the mail never stops. It just keeps coming and coming and coming, there’s never a let-up. It’s relentless. Every day it piles up more and more and more! And you gotta get it out but the more you get it out the more it keeps coming in. And then the bar code reader breaks and it’s Publisher’s Clearing House day!"
    },
    {
        id: 11,
        name: "Estelle Costanza",
        age: 72,
        gender: "Female",
        location: "35 miles",
        pictures: ["http://newsite.annotatedmst.com/tinymce/plugins/moxiemanager/data/files/Final%20Sacrifice/estelle_costanza.jpg","https://vignette.wikia.nocookie.net/seinfeld/images/1/13/Estelle7.png/revision/latest?cb=20120202152909"],
        job: "Retired",
        school: "",
        about: "I don't understand you. I really don't.You have nothing better to do at three o’clock in the afternoon? I go out for a quart of milk, I come home, and find my son treating his body like it was an amusement park!"
    },
    {
        id: 12,
        name: "Uncle Leo",
        age: 67,
        gender: "Male",
        location: "15 miles",
        pictures: ["https://pbs.twimg.com/media/B2vYf1sIYAAjspd.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0obkJ-QyO5KG8tAijeiXA0UBzq_O__ZAZV-GT4bkSgu_QbyO"],
        job: "Retired",
        school: "",
        about: " You know where I just came from? Danny Barma… He used to be in the pajama business.I used to be able to get pajamas for free.I used to come over and get pajamas all the time!… The funny thing is: I can’t wear ’em.I get too hot.I sleep in my underwear and a t - shirt.If it gets too hot, I just get the t-shirt off!Anyway, Danny says to me: ‘You need any pajamas ? "
    },
    {
        id: 13,
        name: "Kenny Bania",
        age: 32,
        gender: "Male",
        location: "10 miles",
        pictures: ["https://vignette.wikia.nocookie.net/seinfeld/images/0/0d/Bania.jpg/revision/latest?cb=20120108145313", "http://www.thingstodoswfl.com/wp-content/uploads/2017/05/bania.jpg"],
        job: "Stand-up Comedian",
        school: "",
        about: "Why do they call it Ovaltine? The mug is round. The jar is round. They should call it Roundtine."
    },
    {
        id: 14,
        name: "David Puddy",
        age: 30,
        gender: "Male",
        location: "4 miles",
        pictures: ["https://s-media-cache-ak0.pinimg.com/736x/c4/ff/25/c4ff259f810d8d8e9db1baab3db997a5.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6lzi_kDto4YLPqs4H65Si_OcycBKjBN6Tnkn4J14Xs2InScz"],
        job: "Car Salesman",
        school: "",
        about: "Talk to me, babe."
    },
    {
        id: 15,
        name: "LLoyd Braun",
        age: 34,
        gender: "Male",
        location: "4 miles",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtHkHwPfUndWbj7tigfFksEUFF0wkiP_-Fx7mJIw3wb_6UsYM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4e0kgGe2Jltp1hDCOlNheLrkbsoW6q0DIxbUd-KmJtOjD-r_"],
        job: "Adviser to Mayor Dinkins",
        school: "",
        about: "Serenity Now"
    },
    {
        id: 16,
        name: "J. Peterman",
        age: 44,
        gender: "Male",
        location: "2 miles",
        pictures: ["https://vignette.wikia.nocookie.net/seinfeld/images/5/5b/Jacopo7.jpg/revision/latest?cb=20120204124331", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8DK8Rups0n1Jvr8ArXrFwoLJpc4-4p5SY45W1sVpf8rdIo4X"],
        job: "President of the J.Peterman Company",
        school: "",
        about: "who among us hasn’t snuck into the break room to nibble on a love newton?"
    },
    {
        id: 17,
        name: "Susan Ross",
        age: 36,
        gender: "Female",
        location: "2 miles",
        pictures: ["https://vignette.wikia.nocookie.net/seinfeld/images/9/9d/Susanross.jpg/revision/latest?cb=20120114162508"],
        job: "Executive at NBC",
        school: "",
        about: "No child of mine is ever going to be named Seven!"
    },
    {
        id: 18,
        name: "Janice",
        age: 26,
        gender: "Female",
        location: "4 miles",
        pictures: ["https://vignette.wikia.nocookie.net/friends/images/3/32/300px-Janice.jpg/revision/latest?cb=20080903003317", "https://i.pinimg.com/736x/da/af/d3/daafd3a114bc490833dc89c2a49eb3d6--friends-tv-show-zodiac-signs.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVzmWBKWVcFUSft_xsYXkJtBAN5T8CNFawlqLhHWBfcJAjmgG"],
        job: "",
        school: "",
        about: "OH. MY. GOD."
    },
];

export default data;