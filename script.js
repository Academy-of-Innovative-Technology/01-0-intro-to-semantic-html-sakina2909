
let mainsection= document.querySelector("main");

let posts=[
    {
        image:" https://www.publicdomainpictures.net/pictures/540000/nahled/pink-glitter-background-1695373220Vn3.jpg",
        title: "Pink represents Breast Cancer Awareness",
        post: "Pink!"
    },
    {
        image:"https://storage.googleapis.com/pod_public/750/145975.jpg",
        title: "Butterflies bring love and peace!",
        post: "Butterflies!"
    },
    { 
        image:"https://rlv.zcache.com/jamaican_flag_with_jamaica_word_world_flags_poster-r3bafdb53213d46fdbd925795886fb219_wa3_8byvr_644.webp",
        title:"Pray for Jamaica!",
        post:"Jamaica!"
    }
];

posts.forEach(obj=>{
    let htmlArticle = `<article>
                            <img src=${obj.image}>
                            <h4> ${obj.title} </h4>
                            <p>${obj.post}</p>
                        </article>`;
    mainsection.insertAdjacentHTML("beforeend",htmlArticle)
});


