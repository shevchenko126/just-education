// const dataQuestions =  [
//     {
//         subject: "You are watching the TV news and see this appear on the screen"
//     },
//     {
//         subject: "Complete the sentences"
//     },
//     {
//         subject: "A short message on Twitter is called a ?????"
//     },
//     {
//         subject: "Match the icons to their sites"
//     },
//     {
//         subject: "Facebook was founded in 2005"
//     }
// ]
// export default dataQuestions;

const dataQuestions = [
    {
        id: "1",
        type: "radio",
        subject: "You are watching the TV news and see this appear on the screen",
        variants: [
            "A tweet",
            "A hashtag",
            "A tag"
        ]
    },

    {
        id: "1",
        type: "match",
        subject: "Complete the sentences",
        statements:
        [
            "If I want to send short messages of under 140 characters, I use", 
            "If I want to quickly share pictures I can use", 
            "If I want to do a videochat on my iPhone I can use"
        ],
        variants:
        [            
            "Twitter",
            "Instagram",
            "Facetime",
            "Pinterest",
            "Youtube"
        ]
    },

    {
        id: "1",
        type: "write",
        subject: "A short message on Twitter is called a ?????"
    },

    {
        id: "1",
        type: "select",
        subject: "Match the icons to their sites",
        variants: [
            ["option-1-1", "option-1-2", "option-1-3"],
            ["option-2-1", "option-2-2", "option-2-3", "option-2-4"],
            ["option-3-1", "option-3-2", "option-3-3", "option-3-4"],
            ["option-4-1", "option-4-2", "option-4-3"],
            ["option-5-1", "option-5-2", "option-5-3", "option-5-4"]
        ]
    },

    {
        id: "1",
        type: "boolean",
        subject: "Facebook was founded in 2005"
    }    
]

export default dataQuestions;

