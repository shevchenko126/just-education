const dataQuestions = {
    questions: [
        {
            id: "1",
            type: "radio",
            marked: "true",
            isClearable: "false",
            subject: "You are watching the TV news and see this appear on the screen",
            variants: [
                "A tweet",
                "A hashtag",
                "A tag"
            ]
        },

        {
            id: "2",
            type: "match",
            subject: "Complete the sentences",
            statements: [
                "If I want to send short messages of under 140 characters, I use", 
                "If I want to quickly share pictures I can use", 
                "If I want to do a videochat on my iPhone I can use"
            ],
            variants: [            
                "Twitter",
                "Instagram",
                "Facetime",
                "Pinterest",
                "Youtube"
            ]
        },

        {
            id: "3",
            type: "write",
            subject: "A short message on Twitter is called a ?????"
        },

        {
            id: "4",
            type: "select",
            subject: "Match the icons to their sites",
            variants: [
                {
                    statement: "If I want to (... question one...)",
                    options: [
                        "option-1-1", 
                        "option-1-2", 
                        "option-1-3"
                    ]
                },
                {
                    statement: "If I want to (... question two...)",
                    options: [
                        "option-2-1", 
                        "option-2-2", 
                        "option-2-3", 
                        "option-2-4"
                    ]
                },
                {
                    statement: "If I want to (... question three...)",
                    options: [
                        "option-3-1", 
                        "option-3-2", 
                        "option-3-3", 
                        "option-3-4"
                    ]
                },
                {
                    statement: "If I want to (... question four...)",
                    options: [
                        "option-4-1", 
                        "option-4-2", 
                        "option-4-3"
                    ]
                },
                {
                    statement: "If I want to (... question five...)",
                    options: [
                        "option-5-1", 
                        "option-5-2", 
                        "option-5-3", 
                        "option-5-4"
                    ]
                }
            ]
        },

        {
            id: "5",
            type: "radio",
            marked: "false",
            isClearable: "true",
            subject: "Facebook was founded in 2005",
            variants: [
                "True", 
                "False"
            ]
        }    
    ],
    shownQuestionsNumber: "2"
}

export default dataQuestions;

