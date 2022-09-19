console.log("JS'S ok")


const app = new Vue({
    el: "#app",
    data: {
        activeChatter: 0,
        chatters: [
            {
                profilePic: "img/avatar_1.jpg",
                name: "Michele",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_2.jpg",
                name: "Fabio",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_3.jpg",
                name: "Samuele",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_4.jpg",
                name: "Alessandro B.",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_5.jpg",
                name: "Alessandro L.",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_6.jpg",
                name: "Claudia",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_7.jpg",
                name: "Federico",
                lastMessage: "Ultimo messaggio inviato",
            },

            {
                profilePic: "img/avatar_8.jpg",
                name: "Davide",
                lastMessage: "Ultimo messaggio inviato",
            }
        ]
    },
})
